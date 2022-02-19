import Link from "next/link";

export default function Post( {post} ) {
	return (
		<li>
			<span>{post.id}</span>
			{"："}
			<Link href={`/posts/${post.id}`}>
				<span className="cursor-pointer text-blue-500 border-b border-bule-500 hover:bg-gray-200">
					{post.title}
				</span>
			</Link>
		</li>
	);
}