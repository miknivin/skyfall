import { Metadata } from "next";
import BlogSidebarMain from "@/pages/blog-sidebar/blog-sidebar";

export const metadata: Metadata = {
  title: "Skyfall - BlogSidebar Page",
};

const BlogSidebarPage = () => {
  return <BlogSidebarMain />;
};

export default BlogSidebarPage;
