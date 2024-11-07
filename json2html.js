// json2html.js
export default function json2html(data) {
    let html = '<table data-user="thota.vinoothna@gmail.com">';
  
    html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  
    html += '<tbody>';
    data.forEach(item => {
      html += '<tr>';
      html += `<td>${item.Name}</td>`;
      html += `<td>${item.Age}</td>`;
      html += `<td>${item.Gender ? item.Gender : ''}</td>`;
      html += '</tr>';
    });
    html += '</tbody>';
  
    html += '</table>';
  
    return html;
  }
  