# Note-Taking Frontend

A note-taking web application built with **React**, **Vite**, **MUI**, and **TypeScript**. This is the frontend portion of a full-stack note-taking app.

---

## Engineering Decisions

### 1. **State Management**

- **Redux Toolkit** is used for global state management, chosen for its simplicity and scalability
- **React Query (TanStack)** manages API calls, and background updates efficiently

### 2. **Forms and Validation**

- **Formik** is used for form handling due to its robust structure and ease of use with dynamic fields
- **Yup** handles schema-based form validation

### 3. **Type Safety**

- Entire project is written in **TypeScript**

### 6. **Routing**

- **React Router** is used to support dynamic and nested routing with a clean API.

---

## Setup Instructions

### 1. **Clone the repository**

```bash
git clone https://github.com/Nis13/Note-taking-frontend.git
cd Note-taking-frontend
```

### 2. **Install dependencies**

```bash
npm Install
```

### 3. **Start the development server**

```bash
npm run dev
```

The app will be running at http://localhost:5173/ by default.
