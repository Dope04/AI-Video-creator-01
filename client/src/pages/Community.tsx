import { useEffect, useState } from "react";
import type { Project } from "../types";
import { dummyGenerations } from "../assets/assets";
import { Loader2Icon } from "lucide-react";

const Community = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setIsLoading] = useState(true);

  const fetchProjects = async () => {
    setTimeout(() => {
      setProjects( dummyGenerations);
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    fetchProjects();
  }, [])

  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="size-7 animate-spin text-indigo-400" />
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Community</h1>
        <p className="text-center">Explore creations made by our community members</p>
        </header>

        {/* Projects list */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {projects.map((project) => (
            <div>{project.productName}</div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Community
