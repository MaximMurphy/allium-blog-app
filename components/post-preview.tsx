import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div>
      <div className="mb-5 peer">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className="text-3xl mb-12 leading-snug font-medium peer-hover:underline hover:underline decoration-allium-lightgreen text-allium-darkbrown"
      >
        {title}
      </Link>
      <div className="text-lg my-4 text-allium-darkbrown">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 text-justify text-allium-darkbrown">
        {excerpt}
      </p>
    </div>
  );
};

export default PostPreview;
