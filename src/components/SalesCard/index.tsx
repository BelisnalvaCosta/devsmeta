import { SetStateAction, useState } from "react";
import { BASE_URL } from "../../utils/request";
import DatePicker from "react-datepicker";
import { Sales } from "../../models/sale";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../notificationButton';
import Component from './style.css';
import axios from "axios";

function SalesCard() {

    //Criando metodos para exibir a data do ano anterior
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sales[]>([]);

    useState(() => {

        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
        
        axios.get('${BASE URL}/sales?minDate=${dmin}&maxdate=${max}')
            .then((response: { data: { content: SetStateAction<Sales[]>; }; }) => {
                setSales(response.data.content);
            });
    });

    return (
        <div className="devsmeta-card">
            <h2 className="devsmeta-sales-title">Vendas</h2>
            <div>
                <div className="devsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="devsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="devsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="devsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="devsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key= {sale.id}>
                                    <td className="show992">{sale.id}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="devsmeta-red-btn-container">
                                            <NotificationButton saleId={sale.id} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>

                </table>
            </div>

        </div>

    )
}

export default SalesCard;