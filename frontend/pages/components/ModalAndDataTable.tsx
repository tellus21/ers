import { convertDateProperty } from '@/common/lib'
import { Button, Container, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DataTableBase } from './DataTableBase'

interface ModalAndDataTableProps {
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
export function ModalAndDataTable({
    query,
    logicalName,
    modalSize,
    children,
    form,
    tableColumns,
}: ModalAndDataTableProps) {
    const [modalOpened, modalHandlers] = useDisclosure(false)
    // const { isLoading, error, data: query } = useQueryBase(resource)
    // const allQuery = query?.[resource]

    // isLoading ? <Loader /> : null
    // error ? <Text>Errorです！</Text> : null

    const onModalCloseClick = () => modalHandlers.close()
    const onCreateButtonClick = () => {
        form.reset()
        modalHandlers.open()
    }
    const onTableRowClick = (rowData: any) => {
        form.setValues(convertDateProperty(rowData, 'birthday'))
        modalHandlers.open()
    }

    return (
        <Container size="xl">
            <Text size="md">{`${logicalName}一覧`}</Text>
            <Modal
                opened={modalOpened}
                onClose={onModalCloseClick}
                title={`${logicalName}登録`}
                size={modalSize}
            >
                {children}
            </Modal>

            <Group position="right">
                <Button
                    size="sm"
                    onClick={onCreateButtonClick}
                >{`${logicalName}登録`}</Button>
            </Group>

            <DataTableBase
                columns={tableColumns}
                records={query}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            />
        </Container>
    )
}
