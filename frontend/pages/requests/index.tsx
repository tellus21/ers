import { Button, Container, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DataTableBase } from '../components/DataTableBase'
import { Request, useRequestFeature } from './requestFeature'
import { SearchPatientModal } from './SearchPatientModal'
import { CreateRequestModal } from './CreateRequestModal'
import { useMutateBase } from '@/common/hooks'
import { useState } from 'react'

export default function Index() {
    const { logicalName, resource, columns, form, fields, query } =
        useRequestFeature()

    const [displayRequest, setDisplayRequest] = useState<Request>({
        id: 0,
        user_id: 0,
        patient_id: 0,
        created_at: null,
        updated_at: null,
        deleted_at: null,
    })

    // searchPatientModalを開閉するためのハンドラーを取得
    const [searchPatientModalOpend, searchPatientModalHandlers] =
        useDisclosure(false)

    // createRequestModalを開閉するためのハンドラーを取得
    const [createRequestModalOpend, createRequestModalHandlers] =
        useDisclosure(false)

    // テーブルの行がクリックされた時の処理
    const onTableRowClick = (rowData: any) => {
        //formを、選択した行に対応した患者にする
        createRequestModalHandlers.open()
        console.log(rowData)
    }

    return (
        <Container size="xl">
            <Text size="md">{`${logicalName}一覧`}</Text>

            {/* 患者検索モーダルを表示 */}
            <SearchPatientModal
                opened={searchPatientModalOpend}
                close={searchPatientModalHandlers.close}
                createRequestModalOpen={createRequestModalHandlers.open}
                form={form}
                displayRequest={displayRequest}
                setDisplayRequest={setDisplayRequest}
                requests={query}
            />

            {/* 依頼作成モーダルを表示 */}
            <CreateRequestModal
                opened={createRequestModalOpend}
                close={createRequestModalHandlers.close}
                resource={resource}
                form={form}
            />

            {/* 依頼登録ボタンを表示 */}
            <Group position="right">
                <Button
                    size="sm"
                    onClick={searchPatientModalHandlers.open}
                >{`患者検索`}</Button>
            </Group>

            {/* 依頼一覧テーブルを表示 */}
            <DataTableBase
                columns={columns}
                records={query}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            />
        </Container>
    )
}
