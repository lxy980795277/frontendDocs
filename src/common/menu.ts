import type { IMenuList } from "@/type/common";

export const menuList: IMenuList[] = [
    {
        key: '1',
        title: '数据采集',
        image: '123'
    },
    {
        key: '2',
        title: '数据采集23',
        image: '123'
    },
    {
        key: '3',
        title: '数据采集',
        image: '123',
        children: [
            {
                key: '11',
                title: '数据采集',
                image: '123'
            },
            {
                key: '12',
                title: '数据采集',
                image: '123'
            },
        ]
    }
];