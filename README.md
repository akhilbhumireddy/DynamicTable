# Dynamic Table Assignment

## Objective

To assess your ability to build a simple, functional, and visually appealing table using React. This assignment evaluates your understanding of React components, state management, and basic styling.

## Tech Stack

- **Frontend**: React
- **Styling**: CSS (Plain CSS, CSS Modules, TailwindCSS, or Bootstrap)
- **Deployment**: Netlify
- **Version Control**: GitHub

## Completion Instructions

### Functionality

#### Must Have

1. A **single-select dropdown** in Column 1 with a static list of options. Once an option is selected, it cannot be reselected in other rows.
2. A **multi-select dropdown** in Column 2 allowing multiple options selection. Users can add a new option directly from the dropdown.
3. An **Add New Row** button to append rows to the table.
4. Rows dynamically update based on user inputs.

#### Nice to Have

- Responsive design.
- Inline editing for rows.
- Data persistence using localStorage or sessionStorage.

### Guidelines to Develop the Project

#### Must Have

- Follow React best practices for component structure and state management.
- Maintain clean, readable, and modular code.
- Ensure alignment with the wireframe design provided.

#### Nice to Have

- Utilize reusable components where possible.
- Add appropriate error handling (e.g., validations for dropdown selections).
- Optimize performance for large tables.

### Submission Instructions

#### Must Have

1. Host the application on Netlify: [Deployment Link](https://akhildynamic.netlify.app/).
2. Provide the source code in a GitHub repository: [GitHub Repository](https://github.com/akhilbhumireddy/DynamicTable.git).
3. Ensure the repository includes:
   - A descriptive `README.md`.
   - Necessary comments within the code.

#### Nice to Have

- Include a `CHANGELOG.md` for tracking updates.
- Add unit tests to critical components.

## Resources

### Design Files

Refer to the wireframes provided in the assignment description.

### APIs

No backend or external APIs are required for this assignment. Use hardcoded data.

### Third-party Packages

- You may use any third-party library for dropdowns, such as `react-select` or `downshift`.
- Optionally use utility libraries like `classnames` for conditional styling.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/akhilbhumireddy/DynamicTable.git
   ```

2. Navigate to the project directory:

   ```bash
   cd DynamicTable
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Evaluation Criteria

1. **Functionality**: The table must meet all the described features.
2. **Code Quality**: Organized, readable, and adhering to React best practices.
3. **UI/UX**: The table must closely follow the provided wireframe.
4. **Bonus Features**: Any enhancements must be listed in the `README.md` or submission email.

---
