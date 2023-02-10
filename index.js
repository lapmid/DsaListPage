const source = JSON.parse(sourceJson);
var root = document.getElementById("table_body");

var table = source
    .filter((row) => !!row.url)
    .map((row) => {
        return {
            sn: row.topic_number,
            category: row.category,
            url: row.url,
            hint: row.pep_ref + " | " + row.hint,
        };
    })
    .map((row) => {
        return `<tr scope="row">
    <td scope="col">${row.sn}</td>
    <td scope="col">${row.category}</td>
    <td scope="col"><a target='_empty' href='${row.url}'>${row.url}</a></td>
    <td scope="col">${row.hint}</td>
    </tr>`;
    })
    .join("");

root.innerHTML = table;