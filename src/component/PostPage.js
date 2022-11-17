export default function PostPage(props) {
    return (
        <div className="postPage">
            <div className="postLeft">
                <div className="inner">
                    <h1 className="title">글 제목</h1>
                    <div className="editor">
                        <div className="editorImage"></div>
                        <div className="editorInfo">
                            <p className="name">작성자</p>
                            <p className="date">작성일자</p>
                        </div>
                    </div>
                    <div className="postContent"></div>
                </div>
            </div>
            <div className="postRight">
                <div className="inner">
                    <div className="material-symbols-outlined btnClose" onClick={() => {
                        props.setPostView(false)
                    }}>close
                    </div>
                    <div className="commentBox">
                    </div>
                </div>
            </div>
        </div>
    )
}