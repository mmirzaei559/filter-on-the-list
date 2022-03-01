import React, {useEffect, useState} from "react";
import axios from "axios";
import './Home.scss';
import searchIcon from '../../assets/icons/search.svg';
import thumbnailIcon from '../../assets/icons/thumbnail.svg';
import listIcon from '../../assets/icons/list.svg';
import sortIcon from '../../assets/icons/sort.svg';
import {ThumbnailCard} from "../Cards/ThumbnailCard/ThumbnailCard";
import {ListCard} from "../Cards/ListCard/ListCard";
import IUser from "../../interfaces/user";



export const Home: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState(true);
    const [userListIsThumbnail, setUserListIsThumbnail] = useState(true);

// sort users
    const sortUsers = () => {
        const sortedUser = users.sort((a:IUser, b:IUser) => {
            return (sortType ? 1 : -1 ) * a.name.first.localeCompare(b.name.first)
        })
        setUsers(sortedUser)
    }

// Fetch users
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}`)
            .then(res => {
                if (res.data.results) {
                    let i, count;
                    for (i = 0, count = 1; i < res.data.results.length; i++) {
                        if (count === 1) {
                            res.data.results[i].color = '#A7B8A8';
                            count++
                        } else if (count === 2) {
                            res.data.results[i].color = '#E3D5C9';
                            count++
                        } else if (count === 3) {
                            res.data.results[i].color = '#E7CDAB';
                            count++
                        }else if (count === 4) {
                            res.data.results[i].color = '#E1D3C7';
                            count++
                        }else if (count === 5) {
                            res.data.results[i].color = '#E8CDAD';
                            count++
                        }else if (count === 6) {
                            res.data.results[i].color = '#A7B8A8';
                            count = 1
                        }
                    }
                }
                setUsers(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <header>
                <h1 aria-label="header title">meet the Team</h1>
            </header>
            <section className='main-wrapper'>
                <article className="search-sort-container">
                    <img src={sortIcon}
                         aria-label="sorting switch"
                         alt="sort"
                         className="sort"
                         onClick={() => {
                             setSortType(!sortType)
                             sortUsers()
                         }}
                    />
                    <div className="search-wrapper">
                        <img src={searchIcon}
                             alt="Search"/>
                        <input role="search-box"
                               aria-label="Search by name"
                               title="Search by name"
                               value={searchTerm}
                               data-testid="searchUsers"
                               onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div onClick={() => setUserListIsThumbnail(!userListIsThumbnail)}
                         className="view-button">
                        {
                            userListIsThumbnail ?
                                <img aria-label="thumbnail view switch" src={thumbnailIcon}/>
                                :
                                <img aria-label="list view switch" src={listIcon} />
                        }

                    </div>
                </article>
                <article>
                    {
                        users.length > 0 ?
                            <div className="add-content">
                                <ul className={userListIsThumbnail ? 'results' : ''}>

                                    {users.filter((user: IUser) => {
                                        if (searchTerm === '') {
                                            return user
                                        } else if (user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) || user.name.last.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return user
                                        }
                                    }).map((user: any) => (
                                        <li key={user.login.uuid}>
                                            {
                                                userListIsThumbnail ?
                                                    <ThumbnailCard user={user}/>
                                                    :
                                                    <ListCard user={user}/>
                                            }
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            :
                            ''
                    }
                </article>
            </section>
        </>
    );
};