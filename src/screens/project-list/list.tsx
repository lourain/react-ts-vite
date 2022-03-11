import { Table } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { User } from './search-panel';
import { TableProps } from 'antd/lib/table/Table';
interface Project {
  id: string;
  personId: string;
  name: string;
  pin: string;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project> {
  users: User[];
}

export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      pagination={false}
      rowKey={'id'}
      {...props}
      columns={[
        { title: '名称', dataIndex: 'name' },
        { title: '部门', dataIndex: 'organization' },
        {
          title: '负责人',
          render(value, project) {
            return <span>{users.find(user => user.id === project.personId)?.name}</span>;
          },
        },
        {
          title: '时间',
          dataIndex: 'created',
          render(value, project) {
            return <span>{project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}</span>;
          },
        },
      ]}
    />
  );
};
