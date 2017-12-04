var local_host = 'http://' + document.domain;
Mock.mock(local_host + '/getFileList.php', {
    'file_list': [
        {'name': Mock.Random.name(), 'size': '', 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': '', 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 10000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {
            'name': Mock.Random.name(),
            'size': Mock.Random.natural(1, 100000000000),
            'update_time': Mock.Random.date('T')
        },
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 100000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 100000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {
            'name': Mock.Random.name(),
            'size': Mock.Random.natural(1, 1000000000000),
            'update_time': Mock.Random.date('T')
        },
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 10), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 10000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 10000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000), 'update_time': Mock.Random.date('T')},
        {'name': Mock.Random.name(), 'size': Mock.Random.natural(1, 1000000000), 'update_time': Mock.Random.date('T')},
    ]
});
Mock.mock(local_host + '/deleteFile.php', {
    'server_message': {
        'msg_type': 'warning',
        'msg_content': 'delete file "test" '
    }
});
Mock.mock(local_host + '/renameFile.php', {
    'server_message': {
        'msg_type': 'info',
        'msg_content': 'rename file renamef'
    }
})
Mock.mock(local_host + '/copyFile.php', {
    'server_message': {
        'msg_type': 'info',
        'msg_content': 'copyFile.php'
    }
})
Mock.mock(local_host + '/moveFile.php', {
    'server_message': {
        'msg_type': 'info',
        'msg_content': 'moveFile.php'
    }
})
Mock.mock(local_host + '/paste.php', {
    'server_message': {
        'msg_type': 'success',
        'msg_content': 'paste file to this dir'
    }
})
Mock.mock(local_host + '/login.php', {
    'server_message': {
        'msg_type': 'success',
        'msg_content': 'password is not true'
    },
    'join_url':'http://127.0.0.1'
})