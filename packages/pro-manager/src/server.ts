import { Model, RestSerializer, belongsTo, createServer, hasMany } from 'miragejs'
import { ModelDefinition } from 'miragejs/-types'
import { Projects, Tasks, Users } from './utils/data'
import type { Project, Task, User } from './utils/types'


const UserModel: ModelDefinition<User> = Model
const ProjectModel: ModelDefinition<Project> = Model
const TaskModel: ModelDefinition<Task> = Model


export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,
    serializers: {
      task: RestSerializer.extend({
        include: ["users", "project"],
        embed: true,
      }),
      project: RestSerializer.extend({
        include: ["manager", "tasks"],
        embed: true,
      })
    },
    models: {
      user: UserModel.extend({
        tasks: hasMany(),
        projects: hasMany(),
      }),
      project: ProjectModel.extend({
        tasks: hasMany(),
        manager: belongsTo('user'),
      }),
      task: TaskModel.extend({
        project: belongsTo(),
        users: hasMany(),
      })
    },

    seeds(server) {
      // create intial users
      const users = []
      Users.forEach((user) => {
        const U = server.create("user", user)
        users.push(U)
      })

      // create initial projects and tasks
      const proj1 = server.create("project", {...Projects[0], manager: users[0]})
      Tasks.forEach((task) => {
        // assign users randomly
        const randCount = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
        const randUsers = users.sort(() => Math.random() - Math.random()).slice(0, randCount)
        server.create("task", { project: proj1, ...task, users: randUsers })
      })
      server.create("project", {...Projects[1], manager: users[1]})
    },

    routes() {
      this.namespace = "api"

      // GET USERS
      this.get("/users", (schema) => {
        return schema.users.all()
      })

      // GET PROJECTS
      this.get("/projects", (schema) => {
        return schema.projects.all()
      })

      // GET TASKS
      this.get("/tasks", (schema) => {
        return schema.tasks.all()
      })
    },
  })

  return server
}
