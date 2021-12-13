const DeveloperListItem = ({ id, name, skills }) => {
  return (
    <li>
      Developer name: {name}, Developer Skills: {skills} <button>Delete</button>
      <button>Edit</button>
    </li>
  );
};

export default DeveloperListItem;
