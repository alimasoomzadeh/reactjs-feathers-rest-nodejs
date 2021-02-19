import React from 'react'

const MemberTable = (props) => (
    <table>
        <thead>
        <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>National Code</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.memberArray.length > 0 ? (
            props.memberArray.map((member) => (
                <tr key={member.id}>
                    <td>{member.username}</td>
                    <td>{member.firstName}</td>
                    <td>{member.lastName}</td>
                    <td>{member.nationalCode}</td>
                    <td>
                        <button className="button muted-button" onClick={() => props.selectItem(member)}>Edit</button>
                        <button className="button muted-button" onClick={() => props.deleteItem(member.id)}>Delete</button>
                    </td>
                </tr>
            ))
        ) : (
            <tr key={"nomember"}>
                <td colSpan={3}>No members</td>
            </tr>
        )}
        </tbody>
    </table>
)

export default MemberTable