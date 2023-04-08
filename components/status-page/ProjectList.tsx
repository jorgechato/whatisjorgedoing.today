import { Status } from "@/lib/ConfigType";
import { Project } from "./Project";


const config: { [key: string]: any } = require('@/my.config.js');

export function ProjectList() {
    const projects: Status[] = config.STATUS;

    return (
        <>
            <ul className='grid text-3xl md:grid-cols-2 xs:grid-cols-1 gap-4 mt-10'>
                {projects.map((project: Status, index: number) => (
                    <li key={index} className='text-center'>
                    <Project url={project.url} name={project.name} />
                    </li>
                ))}
            </ul>
        </>
    );
}