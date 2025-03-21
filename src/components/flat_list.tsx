import { useState, useEffect } from "react";
import '../styles/components/flat_list.css'

export default function FlatList() {

    const projects = [{ aluno: "samuel" },
    { aluno: "samuel" },
    { aluno: "marcelo" },
    { aluno: "joao" },
    { aluno: "carlos" }

    ];



    return (
        <>
            <div className="flatListContainer">

                {projects.map((project, index) => {
                    let current = index; // Declarar a variável dentro do bloco da função
                    return (
                        <div key={index} className="item">
                            {project.aluno}
                        </div>
                    );
                })}
            </div>

        </>


    )
}