import { Button, Container, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DataTableBase } from '../components/DataTableBase'
import {
    Request,
    requestInitialValue,
    useRequestFeature,
} from './requestFeature'
import { createContext, useState } from 'react'
import { EditRequestModal } from './request/EditRequestModal'
import { CreateRequestModal } from './request/CreateRequestModal'
import {
    Instruction,
    instructionInitialValues,
} from './instruction/instractionFeature'

export const EditedRequestContext = createContext({})
export const EditedInstructContext = createContext({})

export default function Index() {
    const { logicalName, columns, query } = useRequestFeature()

    const [editedRequest, setEditedRequest] =
        useState<Request>(requestInitialValue)

    const [editedInstruction, setEditedInstruction] = useState<Instruction>(
        instructionInitialValues
    )

    const [createRequestModalOpend, createRequestModalHandlers] =
        useDisclosure(false)

    const [editRequestModalOpend, editRequestModalHandlers] =
        useDisclosure(false)

    // テーブルの行がクリックされた時の処理
    const onTableRowClick = (rowData: any) => {
        //formを、選択した行に対応した患者にする
        createRequestModalHandlers.open()
        console.log(rowData)
    }

    return (
        <EditedRequestContext.Provider
            value={{ editedRequest, setEditedRequest }}
        >
            <EditedInstructContext.Provider
                value={{ editedInstruction, setEditedInstruction }}
            >
                <Container size="xl">
                    <Text size="md">{`${logicalName}一覧`}</Text>

                    {/* 依頼登録ボタンを表示 */}
                    <Group position="right">
                        <Button
                            size="sm"
                            onClick={createRequestModalHandlers.open}
                        >
                            {'患者検索'}
                        </Button>
                    </Group>

                    <CreateRequestModal
                        opened={createRequestModalOpend}
                        close={createRequestModalHandlers.close}
                        editRequestModalHandlersOpen={
                            editRequestModalHandlers.open
                        }
                    />

                    {/* 依頼一覧テーブルを表示 */}
                    <DataTableBase
                        columns={columns}
                        records={query}
                        onRowClick={(rowData) => onTableRowClick(rowData)}
                    />

                    <EditRequestModal
                        opened={editRequestModalOpend}
                        close={editRequestModalHandlers.close}
                    />
                </Container>
            </EditedInstructContext.Provider>
        </EditedRequestContext.Provider>
    )
}
