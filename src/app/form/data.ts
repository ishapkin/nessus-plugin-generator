/**
 * Plugin class
 */
export const plugin = {
    script_name: '',
    script_description: '',
    script_summary: '',
    script_category: '',
    script_family: '',
    script_copyright: 'No copyright',
    script_dependencies: '"find_service.nes"',
    script_required_ports: '80',
};
/**
 * Script category
 */
export const categories = [
    {
        key: 'ACT_INIT',
        name: 'Сценарий инициализирует статьи в БЗ'
    },
    {
        key: 'ACT_SCANNER',
        name: 'Сканер портров (ping)'
    },
    {
        key: 'ACT_SETTINGS',
        name: 'Записывает информацию в БЗ после ACT_SCANNER'
    },
    {
        key: 'ACT_GETTER_INFO',
        name: 'Идентифицирует службы, разбирает шапки'
    },
    {
        key: 'ACT_ATTACK',
        name: 'Атака без последствий (обход каталогов)'
    },
    {
        key: 'ACT_MIXED_ATTACK',
        name: 'Запускает потенциално опасные атаки'
    },
    {
        key: 'ACT_DESTRUCTIVE_ATTACK',
        name: 'Пытается исказить данные'
    },
    {
        key: 'ACT_DENIAL',
        name: 'Пытается вызвать отказ службы'
    },
    {
        key: 'ACT_KILL_HOST',
        name: 'Пытается вывести машину-журтву из строя'
    },

];

/**
 * Script family
 * TODO: etc
 */
export const family = [
    {
        key: 'Remote file access',
        name: 'Удаленный доступ к файлам'
    },
    {
        key: 'Ports scanners',
        name: 'Сканеры портов'
    },
    {
        key: 'NIS',
        name: 'NIS'
    },
    {
        key: 'Netware',
        name: 'Netware'
    },
    {
        key: 'Misc.',
        name: 'Разное'
    },
    {
        key: 'General',
        name: 'Обшие'
    },
    {
        key: 'Gain a shell remotely',
        name: 'Удаленное получение оболочки'
    },
    {
        key: 'FTP',
        name: 'FTP'
    },
    {
        key: 'Firewalls',
        name: 'Межсетевые экраны'
    },
    {
        key: 'Finger abuses',
        name: 'Атака на службу Finger'
    },
    {
        key: 'Denial of service',
        name: 'Отказ обслуживания'
    },
    {
        key: 'CISCO',
        name: 'CISCO'
    },
    {
        key: 'Backdoors',
        name: 'Черный ход'
    },
    {
        key: 'CGI abuses',
        name: 'Сканер портров (ping)'
    }
];
