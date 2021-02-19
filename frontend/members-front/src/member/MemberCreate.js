import React, {useState} from 'react'

const MemberCreate = (props) => {
    //member
    const memberInitialState = {
        username: '',
        firstName: '',
        lastName: '',
        nationalCode: '',
    }
    const [member, setMember] = useState(memberInitialState);

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setMember({...member, [name]: value})
    }


    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!member.username || !member.firstName || !member.lastName || !member.nationalCode) return
            props.createItem(member)
            setMember(memberInitialState)
        }}>
            <label>Username</label>
            <input type="text" name="username" value={member.username} onChange={handleInputChange}/>
            <label>First Name</label>
            <input type="text" name="firstName" value={member.firstName} onChange={handleInputChange}/>
            <label>Last Name</label>
            <input type="text" name="lastName" value={member.lastName} onChange={handleInputChange}/>
            <label>National Code</label>
            <input type="text" name="nationalCode" value={member.nationalCode} onChange={handleInputChange}/>
            <button>Add new user</button>
        </form>
    )
}

export default MemberCreate