export default function EditPage(props) {
    return (
        <div className="editPage">
            <div className="editForm">
                <div className="inner">
                    <div className="inputBox">
                        <label for="inputTitle">게시글 제목을 입력하세요</label>
                        <input type="text" id="inputTitle" onFocus={() => {
                            document.querySelector('.inputBox>label').classList.add('active')
                            document.querySelector('#inputTitle').classList.add('active')
                        }}
                               onBlur={(e) => {
                                   e.target.value === "" && document.querySelector('.inputBox>label').classList.remove('active')
                                   e.target.value === "" && document.querySelector('.inputBox>label').classList.remove('active')
                               }}/>
                    </div>
                    <textarea className="postText" placeholder="글 내용을 입력하세요"></textarea>
                    <div className="btnBox">
                        <button className="btnApply">작 성</button>
                        <button className="btnClose" onClick={()=>{
                            props.setEditView(false)
                        }}>닫 기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}