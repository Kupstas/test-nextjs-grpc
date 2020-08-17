import React, {useEffect, useState} from 'react';
import {Empty, User} from '../api/generated/user_pb';
import {UserServiceClient} from '../api/generated/user_grpc_web_pb';

export default function () {
    const [data, setData] = useState<Array<User.AsObject>>([]);

    useEffect(() => {
        const service = new UserServiceClient('127.0.0.1:9000', null, null);
        service.getAll(new Empty(), null, (error, data) => {
            if (error) {
                console.log('error', error);
            } else {
                const users = data.getList().getUsersList().map((user) => user.toObject(false));

                setData(users);
            }
        });
    }, []);

    return data.map((user) => (
        <div key={user.id}>
            <div>{user.id}</div>
            <div>{user.username}</div>
        </div>
    ));
}
