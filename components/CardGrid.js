'use client';
import Card from './Card';
import farmersMarket from '../public/images/farmersMarket.png'; // Ensure the path is correct for your project structure 
import frog from '../public/images/frog.png'; 
import storyGenius from '../public/images/storyGenius.png'; 

const projects = [
    { id: 1, image: farmersMarket, title: "Farmers Market App", description:"A React Native app built with TypeScript that helps users discover nearby farmers markets using location-based data. It features an AI-powered chatbot that generates personalized recipes and shopping lists based on market finds."},
    { id: 2, image: frog, title: "Frogger Game", description: "A Python remake of the classic arcade game! Guide the frog across busy roads and rivers, avoiding obstacles to reach safety. Built using Python's Turtle module for a fun and nostalgic experience."},
    { id: 3, image: storyGenius, title: "Story Genius", description: "Story Genius leverages the RAG (Retrieval-Augmented Generation) method, combining AWS Elasticsearch for knowledge retrieval and GPT-3.5 Turbo for AI-driven user story generation, streamlining the software development process."}
];
const CardGrid = () => {

    return (
        <div className="flex flex-wrap justify-center">
            {projects.map((project, index) => (
                <Card key={project.id} image={project.image} title={project.title} description={project.description} width={350} height={200}/>
            ))}
        </div>
    );
};
export default CardGrid;