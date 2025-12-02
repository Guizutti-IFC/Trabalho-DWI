var tasks = []

function getTaskInfo(){
            return{
                'priority': document.getElementById('priority').value,
                'description': document.getElementById('description').value,
                'local': document.getElementById('local').value,
                'recourses': document.getElementById('recourses').value,
                'limitDate': document.getElementById('limitDate').value,
                'enroll': document.getElementById('enroll').value
            }
        }

function addTaskOnList(){
            people.push(getTaskInfo());
            document.getElementById('priority').value = '';
            document.getElementById('description').value = '';
            document.getElementById('local').value = '';
            document.getElementById('recourses').value = '';
            document.getElementById('limitDate').value = '';
            document.getElementById('enroll').value = ''
}

function createTable(){
    const table = document.createElement('table');
    table.setAttribute('border', '2')
    table.style.marginLeft = 'auto'
    table.style.marginRight = 'auto'
    table.style.borderStyle = 'solid'
    table.style.fontSize = '70px'

    const header1 = document.createElement('th')
    header1.textContent = 'Prioridade'
    const header2 = document.createElement('th')
    header2.textContent = 'Tarefa'
    const header3 = document.createElement('th')
    header3.textContent = 'Local'
    const header4 = document.createElement('th')
    header4.textContent = 'Recursos Necessários'
    const header5 = document.createElement('th')
    header5.textContent = 'Data de Limite'
    const header6 = document.createElement('th')
    header6.textContent = 'Matrícula'
    const rowHeader = document.createElement('tr')
    rowHeader.appendChild(header1)
    rowHeader.appendChild(header2)
    rowHeader.appendChild(header3)
    rowHeader.appendChild(header4)
    rowHeader.appendChild(header5)
    rowHeader.appendChild(header6)
            
            const column1 = document.createElement('td');
            const column2 = document.createElement('td');
            const column3 = document.createElement('td')
            const column4 = document.createElement('td');
            const column5 = document.createElement('td');
            const column6 = document.createElement('td')

            const row = document.createElement('tr');
            row.appendChild(column1)
            row.appendChild(column2)
            row.appendChild(column3)
            row.appendChild(column4)
            row.appendChild(column5)
            row.appendChild(column6)
            table.appendChild(rowHeader)
            table.appendChild(row)

            for(task of tasks){
                const rowInfo = document.createElement('tr')
                const tdPriority = document.createElement('td')
                const tdDescription = document.createElement('td')
                const tdLocal = document.createElement('td')
                const tdResourcesNeeded = document.createElement('td')
                const tdLimitDate = document.createElement('td')
                const tdEnroll = document.createElement('td')
                tdPriority.textContent = task.priority
                tdDescription.textContent = task.description
                tdLocal.textContent = task.local
                tdResourcesNeeded.textContent = task.recourses
                tdLimitDate.textContent = task.limitDate
                tdEnroll.textContent = task.enroll

                rowInfo.appendChild(tdPriority)
                rowInfo.appendChild(tdDescription)
                rowInfo.appendChild(tdLocal)
                rowInfo.appendChild(tdResourcesNeeded)
                rowInfo.appendChild(tdLimitDate)
                rowInfo.appendChild(tdEnroll)
                table.appendChild(rowInfo)
            }

            const container = document.getElementById('list');
            container.appendChild(table)
        }