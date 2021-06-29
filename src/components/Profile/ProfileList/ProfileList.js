import React, { useEffect, useState } from 'react';

const ProfileList = () => {

    const [headers, setHeaders] = useState([])
    const [rows, setRows] = useState([])
    const [initRows, setInitRows] = useState([])
    const [sorting, setSorting] = useState('init')

    useEffect(() => {
        fetch('http://localhost/api/list.php')
            .then(res => res.json())
            .then(data => {
                setHeaders(data.data.headers[0])
                setRows(data.data.rows)
                setInitRows(data.data.rows)
            })
        console.log('abc');
    }, [])


    // console.log(initRows);
    // console.log(headers.headers[0].id);
    const handleSorting = () => {

        if (sorting === 'init') {
            setSorting('asc');
            const tempArray = rows.sort((prev, next) => {
                if (prev.name.toLowerCase() < next.name.toLowerCase()) {
                    return -1;
                }
                else if (prev.name.toLowerCase() > next.name.toLowerCase()) {
                    return 1;
                }
            });
            console.log(initRows);
            setRows(tempArray)
        }
        else if (sorting === 'asc') {
            setSorting('dsc');
            const tempArray = rows.sort((prev, next) => {
                if (prev.name.toLowerCase() < next.name.toLowerCase()) {
                    return 1;
                }
                else if (prev.name.toLowerCase() > next.name.toLowerCase()) {
                    return -1;
                }
            });
            console.log(initRows);
            setRows(tempArray)
        }
        else {
            setSorting('init');
            setRows(initRows)
        }

    }


    return (
        <>
            {
                rows.length && (
                    <section className="mt-5">
                        <button onClick={() => handleSorting()} className="btn btn-primary">Click Me</button>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">{headers.id?.title}</th>
                                    <th scope="col">{headers.name?.title}</th>
                                    <th scope="col">{headers.message?.title}</th>
                                    <th scope="col">{headers.created_at?.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rows.map(row => {
                                        return (
                                            <tr key={row.id}>
                                                {
                                                    !headers.name?.hidden ?
                                                        <th scope="row">{row.id}</th> :
                                                        <td></td>
                                                }
                                                {
                                                    !headers.id?.hidden ?
                                                        <td>{row.name}</td> :
                                                        <td></td>
                                                }
                                                {
                                                    !headers.message?.hidden ?
                                                        <td>{row.message}</td> :
                                                        <td></td>
                                                }
                                                {
                                                    !headers.created_at?.hidden ?
                                                        <td>{row.created_at}</td> :
                                                        <td></td>
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section >
                )
            }
        </>
    );
};

export default ProfileList;