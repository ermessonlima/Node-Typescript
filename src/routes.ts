import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseServices";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({ name: "Node", educator: "Ermesson" });
}
