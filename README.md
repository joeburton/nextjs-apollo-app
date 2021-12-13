# NextJS Apollo App

This is a first stab at setting up GraphQL and Apollo with NextJS pages and pages/api, it's not a work of art.

### https://github.com/joeburton?tab=repositories

---

### **_GraphQL Queries_**

```
{
  developers {
    id
    name
    skills
  }
}
```

```
mutation addDeveloper($id: Int, $name: String, $skills: String) {
  addDeveloper(id: $id, name: $name, skills: $skills) {
    id
    name
    skills
  }
}

// variables
{ "id": 3, "name": "James Brown", "skills": "Jazz"}
```

```
mutation editDeveloper($id: Int, $name: String, $skills: String) {
  editDeveloper(id: $id, name: $name, skills: $skills) {
    id
    name
    skills
  }
}

// variables
{ "id": 3, "name": "James Brown", "skills": "Jazz"}
```

```
mutation($id: Int) {
  deleteDeveloper(id: $id) {
    id
    name
    skills
  }
}

// variables
{ "id": 3}
```
