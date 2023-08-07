import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsUpload } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";

import { SecondaryText, UserTitle, Icon, UserImage } from "../components";
import { PostMedia } from "../components/PostMedia";

export const Post: FC = () => {
  return (
    <article className="text-white px-2.5 py-1.5 max-w-[600px]">
      <div className="flex flex-row gap-4">
        <div className="mt-1.5">
          <UserImage alt="user-image" src="/avatar.jpg" />
        </div>
        <div>
          <div>
            <div className="flex flex-row gap-2 items-center">
              <UserTitle href="/" title="El Programador Senior" />
              <SecondaryText sizeText="text-sm" tag="@programador_senior" />
            </div>
            <div className="mt-1">
              <p className="text-sm">
                Your GitHub repository its not going to promote itself. Share a link ⬇️
              </p>
            </div>
            <div className="mt-2 flex flex-row gap-2 justify-between">
              <Icon color="primary" icon={<BsChat size={22} />} label={123} />
              <Icon color="green" icon={<FaRetweet size={22} />} label={123} />
              <Icon color="red" icon={<AiOutlineHeart size={22} />} label={123} />
              <Icon color="primary" icon={<BiBarChart size={22} />} label={123} />
              <Icon color="primary" icon={<BsUpload size={20} />} />
            </div>
          </div>

          <div className="mt-2">
            <PostMedia alt="media" src="/avatar.jpg" type="img" />
          </div>
          <div className="mt-5 w-full h-auto">
            <PostMedia alt="media" src="/devtalles.mp4" type="video" />
          </div>
        </div>
      </div>
    </article>
  );
};
