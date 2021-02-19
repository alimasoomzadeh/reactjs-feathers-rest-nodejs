import React, {useState, useEffect} from 'react'

const MemberUpdate = (props) => {
    //member
    const [member, setMember] = useState(props.selectedMember);

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setMember({...member, [name]: value})
    }

    //if update form change in master
    useEffect(() => {
        setMember(props.selectedMember)
    }, [props])

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!member.username || !member.firstName || !member.lastName || !member.nationalCode) return
            props.updateItem(member.id, member)
        }}>
            <label>Username</label>
            <input type="text" name="username" value={member.username} onChange={handleInputChange}/>
            <label>First Name</label>
            <input type="text" name="firstName" value={member.firstName} onChange={handleInputChange}/>
            <label>Last Name</label>
            <input type="text" name="lastName" value={member.lastName} onChange={handleInputChange}/>
            <label>National Code</label>
            <input type="text" name="nationalCode" value={member.nationalCode} onChange={handleInputChange}/>
            <button>Update user</button>
            <button className="button muted-button" onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}

export default MemberUpdate