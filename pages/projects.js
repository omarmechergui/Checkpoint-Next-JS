// pages/projects.js
export async function getServerSideProps() {
    const projects = [
      { id: 1, title: 'Project One', description: 'Description for Project One' },
      { id: 2, title: 'Project Two', description: 'Description for Project Two' },
    ];
  
    return {
      props: { projects }, // Pass data to the page component
    };
  }
  
  export default function Projects({ projects }) {
    return (
      <div>
        <h1>My Projects</h1>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }