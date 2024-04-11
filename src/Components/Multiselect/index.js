import React, {useState} from 'react';
import "./style.css";

function Multiselect() {
    const [pills, setPills] = useState([]);
    const [users, setUsers] = useState([]);

    function handleAdd(val){
        if(!!val){
            setPills(ps => [...ps, val]);
        }
    }

    function handleKey(e){
        if(e.key == 'Enter'){
            handleAdd(e.target.value);
            e.target.value = "";
        }else if(e.key == "Backspace"){
            setPills(ps => ps.slice(0,-1))
        }
    }

    function handleFocus(){
        document.querySelector('.multi-input').focus();
        
    }

    function fetchData(val){
        if(!!val){
            fetch(`https://dummyjson.com/users/search?q=${val}`).then(res => res.json()).then(data => {
                setUsers(data.users)
            }).catch(err => {
                console.log(err);
            })
        }
    }

    function debounce(func, delay){
        let timeout;
        return function(...args){
            if(timeout){
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                func(...args);
            },delay)
        }
    }



    let fetchDData = debounce(fetchData, 800);

    function handleListSelect(value){
        handleAdd(value);
        setUsers([]);
        document.querySelector("input").value= "";
    }

  return (
    <div className='container'>
        <div className='multi-input-wrapper' onClick={handleFocus}>
            {
                pills.map(p => (
                    <div className='pill'>{p}</div>
                ))
            }
            <div className='input-list'>
                <input placeholder='Search your query....' onChange={(e) => fetchDData(e.target.value)} onKeyDown={e => handleKey(e)} className='multi-input'/>
                {!!users && users.length > 0 && (
                    <div className='list-sel'>
                        <ul>
                            {
                                users.map((user) => (
                                    <li onClick={() => handleListSelect(user.firstName + " " + user.lastName)} key={user.id}>{user.firstName + " " + user.lastName}</li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
        </div>

    </div>
  )
}

export default Multiselect