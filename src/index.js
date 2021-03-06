import './scss/index.scss'
import {Excel} from '@/components/excel/Excel';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()
console.log('Excel', excel)
