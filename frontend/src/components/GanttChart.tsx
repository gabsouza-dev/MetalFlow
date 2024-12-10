import React, { useEffect, useState } from 'react';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Toolbar, Selection, Filter, Page } from '@syncfusion/ej2-react-gantt';
import { HttpClient } from '../services/HttpClient';

const GanttChart = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await HttpClient.get('/tasks');
      setTasks(data);
    }
    fetchData();
  }, []);

  const taskFields = {
    id: 'id',
    name: 'task_name',
    startDate: 'start_date',
    endDate: 'end_date',
    progress: 'progress',
    status: 'status'
  };

  return (
    <div>
      <GanttComponent
        dataSource={tasks}
        taskFields={taskFields}
        allowEditing={true}
        allowFiltering={true}
        allowPaging={true}
        toolbar={['Add', 'Edit', 'Delete']}
        height="400px"
      >
        <ColumnsDirective>
          <ColumnDirective field="id" headerText="ID" width="100" />
          <ColumnDirective field="task_name" headerText="Task Name" width="200" />
          <ColumnDirective field="start_date" headerText="Start Date" width="100" />
          <ColumnDirective field="end_date" headerText="End Date" width="100" />
          <ColumnDirective field="progress" headerText="Progress" width="100" />
          <ColumnDirective field="status" headerText="Status" width="100" />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Selection, Filter, Page]} />
      </GanttComponent>
    </div>
  );
};

export default GanttChart;
