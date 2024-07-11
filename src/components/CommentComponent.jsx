import React, { useEffect } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, selectComments, selectLoading } from "../redux/slices/commentsSlice";
import LoadingComponent from "./LoadingComponent";

export const CommentComponent = () => {
 
  const dispatch = useDispatch();
  const { comments } = useSelector(selectComments);
  const loading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchComments({page: 1, pageSize: 4 }));
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <h3 className="md:text-xl text-base text-slate-700  font-bold">
        {comments && comments.length} Comments
      </h3>
     <div className="flex flex-col gap-4">
        {comments && comments.map((comment) => (
          <div key={comment.id} className="flex">
            <div className="flex gap-4">
             <div className="w-1/4">
                <div className="w-[50px] h-[50px]">
                  <img
                    className="w-full h-full object-cover"
                    src={comment.avatar ? comment.avatar : "https://cdn.dcodegroup.com/5afe7234303d9dcode-group-data-business-informationjpg.jpg"}
                  />
                </div>
             </div>
              <div className="flex flex-col gap-4">
                <p className="text-slate-800">{comment.body}</p>
                <div>
                  <ButtonComponent text="Reply" size="small" color="error" />
                </div>
              </div>
            </div>
          </div>
        ))}
     </div>
    </div>
  );
};
