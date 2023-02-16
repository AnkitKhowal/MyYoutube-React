import React from 'react';

const commentsData = [
    {
        name: "Ankit Khowal",
        text: "Lorem Ipsum is simply dummy text.",
        replies: [
            {
                name: "Gunjan Khowal",
                text: "Nesting 1.",
                replies: [
                    {
                        name: "Sunit Khowal",
                        text: "Nesting 2.",
                        replies: [{
                            name: "Khusboo Khowal",
                            text: "Nesting 3.",
                            replies: [
                                {
                                    name: "Yash Khowal",
                                    text: "Nesting 4.",
                                    replies: [
                                        {
                                            name: "Khushi Khowal",
                                            text: "Nesting 5.",
                                            replies: [

                                            ]
                                        }
                                    ]
                                }
                            ]
                        }]
                    }

                ]
            }
        ]
    },
    {
        name: "Gunjan Khowal",
        text: "Lorem Ipsum is simply dummy text of the printing",
        replies: [
        ]
    },
    {
        name: "Gunank Khowal",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
            {
                name: "Gunjan Khowal",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: []
            }
        ]
    },
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="flex shadow-sm bg-gray-50 p-2 rounded-lg my-2">
            <img className="h-8 w-8"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <h1>{text}</h1>
            </div>
        </div>
    )
};

//Nested Comments
const CommentList = ({ list }) => {
    return list.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className="pl-5 border border-l-black ml-5">
                <CommentList list={comment.replies}/>
            </div>
        </div>

    ))
};


const CommentsContainer = () => {
    return (
        <div className="p-2 m-5 ">
            <h1 className="text-2xl font-bold">Comments</h1>
            <CommentList list={commentsData} />
        </div>
    )
}

export default CommentsContainer;