import React, { useEffect, useState } from 'react';
import { SearchPanel } from './search-panel';
import { List, Project } from './list';
import qs from 'qs';
import { cleanObject, useDebounse, useMount } from '../../utils';
import { useHttp } from '@/utils/http';
import styled from '@emotion/styled';
import { useAsync } from '@/utils/use-async';

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });

  const [users, setUsers] = useState([]);
  const debounseParam = useDebounse(param, 1000);
  const client = useHttp();
  const { run, isLoading, error, data: list } = useAsync<Project[]>();
  useEffect(() => {
    run(client('projects', { data: cleanObject(debounseParam) }));
  }, [debounseParam]);

  useMount(() => {
    client('users').then(setUsers);
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      {/* <Typography.Text>{isLoading}</Typography.Text> */}
      <List users={users} loading={isLoading} dataSource={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
