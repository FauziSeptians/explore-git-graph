import axios from '@/shared/lib/axios';
import userManagement from '@/domains/auth/services/user-management';
import { useQuery } from '@tanstack/react-query';

function getUserKey() {
  return ['user'];
}

function getUser() {
  return userManagement.get().then((response: any) => response.data);
}

export default function useGetUser() {
  return useQuery({
    queryKey: getUserKey(),
    queryFn: getUser,
  });
}
