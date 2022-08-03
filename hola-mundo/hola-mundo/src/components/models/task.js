import { LEVELS } from "./levels.enum"; // Importamos el enum que hemos creado en la misma carpeta para definir la prioridad de la tarea

export class Task {
    name = "";
    description = "";
    completed = false;
    level = 'URGENTE';

    constructor(name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;

    }
}