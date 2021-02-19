import React, {useState, useEffect} from 'react'
import MemberTable from './MemberTable'
import MemberCreate from './MemberCreate'
import MemberUpdate from './MemberUpdate'

const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');

const Member = () => {
    //config features:
    const app = feathers();
    const restClient = rest('http://localhost:8080')
    app.configure(restClient.fetch(window.fetch));
    const members = app.service('members').hooks({
        error: {
            all: [async context => {
                console.error(`Error in ${context.path} calling ${context.method}  method`, context.error);
                return context;
            }]
        }
    });


    //get all members
    const [memberArray, setMemberArray] = useState({});
    useEffect(() => {
        listItem();
    }, [])


    //selectedMember
    const selectedMemberInitialState = {
        id: null,
        username: '',
        firstName: '',
        lastName: '',
        nationalCode: '',
    }
    const [selectedMember, setSelectedMember] = useState(selectedMemberInitialState);
    //is editing selected member?
    const [editing, setEditing] = useState(false);


    //crud:
    const listItem = () => {
        members.find().then(function (memberArrayInitialState) {
            console.log("memberArrayInitialState", memberArrayInitialState);
            setMemberArray(memberArrayInitialState);
        }, [setMemberArray]);
    }
    const createItem = (member) => {
        members.create({
            username: member.username,
            firstName: member.firstName,
            lastName: member.lastName,
            nationalCode: member.nationalCode
        }).then(function (result) {
            console.log("createItem result:", result)
            listItem();
        });
    }
    const selectItem = (member) => {
        setEditing(true);
        setSelectedMember({
            id: member.id,
            username: member.username,
            firstName: member.firstName,
            lastName: member.lastName,
            nationalCode: member.nationalCode
        })
    }
    const updateItem = (id, updatedMember) => {
        setEditing(false);
        members.update(id,{
            id: updatedMember.id,
            username: updatedMember.username,
            firstName: updatedMember.firstName,
            lastName: updatedMember.lastName,
            nationalCode: updatedMember.nationalCode
        }).then(function (result) {
            console.log("updateItem result:", result)
            listItem();
        });
    }
    const deleteItem = (id) => {
        members.remove(id).then(function (result) {
            console.log("deleteItem result:", result)
            listItem();
        });
    }


    return (
        <div className="flex-row">
            <div className="flex-large">
                {editing ? (
                    <div>
                        <h2>Edit user</h2>
                        <MemberUpdate setEditing={setEditing} selectedMember={selectedMember} updateItem={updateItem}/>
                    </div>
                ) : (
                    <div>
                        <h2>Add member</h2>
                        <MemberCreate createItem={createItem}/>
                    </div>
                )}
            </div>
            <div className="flex-large">
                <h2>View members</h2>
                <MemberTable memberArray={memberArray} selectItem={selectItem} deleteItem={deleteItem}/>
            </div>
        </div>
    );
}

export default Member;