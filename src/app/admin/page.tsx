import { getAuthSession } from '@/lib/auth';
import getQueryClient from '@/lib/getQueryClient';

import Posts from '../components/admin/Posts';

export default function Admin() {
  return <Posts />;
}
