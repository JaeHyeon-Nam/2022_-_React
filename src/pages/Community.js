import { useEffect } from "react";
import {useState} from "react";
import EditPage from "../component/EditPage";
import PostPage from "../component/PostPage";

export default function Community() {
    const [editView,setEditView] = useState(false)
    const [postView,setPostView] = useState(false)


    const [postList, setPostList] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:8080/community/`)
        .then(response =>{
            return response.json();
        })
        .then(response=>{
            setPostList(response);
        })
    },[])

    return (
        <div id="communityPage">
            {
                editView && <EditPage setEditView={setEditView}></EditPage>
            }
            {
                postView && <PostPage setPostView={setPostView}></PostPage>
            }
            <div className="communityHeader">
                <div className="userMenu"></div>
                <div className="communityMenu">
                    <div className="inner">
                        <ul className="communityNav">
                            <li className="active">트립윗미 커뮤니티</li>
                        </ul>
                        <div className="communityBtnBox">
                            <button className="btnEdit btn" onClick={()=>{
                                setEditView(true)
                            }}>글쓰기</button>
                            <button className="btn">버튼</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="communityIntro">
                <div className="inner">
                    <div className="hotPosts">
                        <div className="hotPostEl" style={{
                            'backgroundImage' : 'url(data:image/jpeg;base64,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)'
                        }}>
                            <div className="hotPostInfo">
                                <p>국내 최대 단풍축제!</p>
                            </div>
                        </div>
                        <div className="hotPostEl">
                            <div className="hotPostInfo">
                                <p>더 보기</p>
                            </div>
                        </div>
                    </div>

                    <div className="profile">
                        <div className="profileImage"></div>
                        <div className="profileMenu">
                            <button className="btnMy">내 게시글 보기</button>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="communityMain">
                <div className="inner">

                        {postList.map((pl,index)=>{ 
                            return(
                                    <li className="postEl" onClick={()=>{
                                        setPostView(false)
                                    }}>
                                        <div className="postInfo">
                                            <div className="infoTop">
                                                <div className="profileImage" style={{
                                                }}></div>
                                                <div className="profileInfo">
                                                    <p className="editName">user : {pl.userID}</p>
                                                    <p className="editDate">time : {pl.postDay}</p>
                                                </div>
                                            </div>
                                            <div className="infoBody">
                                                <p className="editTitle">{pl.postTitle}</p>
                                                <p className="editSub">{pl.postContext}</p>
                                            </div>
                                            <div className="infoFooter">
                                                <p className="editSub">조회 : {pl.postWatch}</p>
                                                <p className="editSub">댓글 : {pl.postRe}</p>
                                            </div>
                                        </div>
                                        <img className="postImage"
                                          src={pl.spacePic}></img>
                                        {/* <div className="postImage" ></div> */}
                                    </li>
                            )
                        })
                    }
                    {/* <li className="postEl">
                        <div className="postInfo">
                            <div className="infoTop">
                                <div className="profileImage"></div>
                                <div className="profileInfo">
                                    <p className="editName">작성자</p>
                                    <p className="editDate">작성날짜</p>
                                </div>
                            </div>
                            <div className="infoBody">
                                <p className="editTitle">글 제목</p>
                                <p className="editSub">글 내용</p>
                            </div>
                            <div className="infoFooter">
                                <p className="editSub">조회 0</p>
                                <p className="editSub">댓글 0</p>
                            </div>
                        </div>
                        <div className="postImage"></div>
                    </li>
                    <li className="postEl">
                        <div className="postInfo">
                            <div className="infoTop">
                                <div className="profileImage"></div>
                                <div className="profileInfo">
                                    <p className="editName">작성자</p>
                                    <p className="editDate">작성날짜</p>
                                </div>
                            </div>
                            <div className="infoBody">
                                <p className="editTitle">글 제목</p>
                                <p className="editSub">글 내용</p>
                            </div>
                            <div className="infoFooter">
                                <p className="editSub">조회 0</p>
                                <p className="editSub">댓글 0</p>
                            </div>
                        </div>
                        <div className="postImage"></div>
                    </li>
                    <li className="postEl">
                        <div className="postInfo">
                            <div className="infoTop">
                                <div className="profileImage"></div>
                                <div className="profileInfo">
                                    <p className="editName">작성자</p>
                                    <p className="editDate">작성날짜</p>
                                </div>
                            </div>
                            <div className="infoBody">
                                <p className="editTitle">글 제목</p>
                                <p className="editSub">글 내용</p>
                            </div>
                            <div className="infoFooter">
                                <p className="editSub">조회 0</p>
                                <p className="editSub">댓글 0</p>
                            </div>
                        </div>
                        <div className="postImage"></div>
                    </li>
                    <li className="postEl">
                        <div className="postInfo">
                            <div className="infoTop">
                                <div className="profileImage"></div>
                                <div className="profileInfo">
                                    <p className="editName">작성자</p>
                                    <p className="editDate">작성날짜</p>
                                </div>
                            </div>
                            <div className="infoBody">
                                <p className="editTitle">글 제목</p>
                                <p className="editSub">글 내용</p>
                            </div>
                            <div className="infoFooter">
                                <p className="editSub">조회 0</p>
                                <p className="editSub">댓글 0</p>
                            </div>
                        </div>
                        <div className="postImage"></div>
                    </li> */}
                </div>
            </ul>
        </div>
    )
}