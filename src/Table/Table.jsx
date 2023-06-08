function Table() {
  return (
    <table class="table table-striped table-hoverable">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th>Title</th>
                <th>Annual Salary</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lisa</td>
                <td>Mabley</td>
                <td>00100</td>
                <td>Magician</td>
                <td>$130,000</td>
                <td>DELETE</td>
            </tr>
        </tbody>
    </table>
  );
}

export default Table;
