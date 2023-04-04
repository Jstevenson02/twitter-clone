import Link from "next/link";
import Image from "next/image";
import type { RouterOutputs } from "~/utils/api";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-200 p-4">
      <Image
        className="h-14 w-14 rounded-full"
        src={author.profilePicture}
        alt={`@${author.username}'s profile picture`}
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-1  text-slate-300">
          <Link
            href={`/@${author.username}`}
            className="font-semibold"
          >{`@${author.username}`}</Link>
          <Link href={`/post/${post.id}`} className="font-thin">
            {" "}
            {` · ${dayjs(post.createdAt).fromNow()}`}
          </Link>
        </div>
        <span className="text-2xl">{post.content}</span>
      </div>
    </div>
  );
};
