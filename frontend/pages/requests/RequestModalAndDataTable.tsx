import { convertDateProperty } from '@/common/lib'
import { Button, Container, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DataTableBase } from './DataTableBase'

interface RequestModalAndDataTableProps {
    query: any
    logicalName: string
    modalSize?: string
    children: React.ReactNode
    form: any
    tableColumns: any
}

/**
 * ModalAndDataTableコンポーネントは、モーダルとテーブルを表示するためのReactコンポーネントです。
 * モーダルを開いてフォームを入力したり、テーブルの行をクリックしてフォームに値を設定したりできます。
 *
 * @param query 検索結果のデータ
 * @param logicalName 表示するロジカル名
 * @param modalSize モーダルのサイズ
 * @param children モーダル内に表示する子要素
 * @param form フォーム
 * @param tableColumns テーブルの列
 */
export function RequestModalAndDataTable({
    query,
    logicalName,
    modalSize,
    children,
    form,
    tableColumns,
}: RequestModalAndDataTableProps) {
    const [patientSearchModalOpened, patientSearchModalHandlers] =
        useDisclosure(false)
    const [createRequestModalOpened, createRequestModalHandlers] =
        useDisclosure(false)
    // const onModalCloseClick = () => modalHandlers.close()
    // const onCreateButtonClick = () => {
    //     form.reset()
    //     modalHandlers.open()
    // }
    // const onTableRowClick = (rowData: any) => {
    //     //birthdayをDate型に変換してからフォームに設定する
    //     form.setValues(convertDateProperty(rowData, 'birthday'))
    //     modalHandlers.open()
    // }

    return (
        <Container size="xl">
            <Text size="md">{`検査依頼一覧`}</Text>

            <Modal
                opened={patientSearchModalOpened}
                onClose={patientSearchModalHandlers.close}
                title={'患者検索'}
                size={modalSize}
            >
                {/* {children} */}
            </Modal>

            <Group position="right">
                <Button
                    size="sm"
                    onClick={patientSearchModalHandlers.open}
                >{`${logicalName}登録`}</Button>
            </Group>

            {/* <DataTableBase
                columns={tableColumns}
                records={query}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            /> */}
        </Container>
    )
}
