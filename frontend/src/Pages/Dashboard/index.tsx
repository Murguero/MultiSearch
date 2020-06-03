import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';
import imgLogo from '../../assets/logo_multisearch2.png';
import { Form, Repositories, Error } from './styles';

interface Equipment {
  EquipmentID: string;
  EquipmentName: string;
}

interface Material {
  MaterialID: string;
  MaterialName: string;
}

interface PurchaseOrder {
  PurchaseOrderID: number;
  Supplier: string;
  MaterialName: string;
  Quantity: number;
}

interface WorkForce {
  WorkforceID: string;
  Name: string;
  Shift: string;
}

const Dashboard: React.FC = () => {
  const [newWord, setNewWord] = useState('');
  const [inputError, setInputError] = useState('');

  const [equipments, setEquipments] = useState<Equipment[]>();
  const [materials, setMaterials] = useState<Material[]>();
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>();
  const [workForce, setWorkForce] = useState<WorkForce[]>();

  useEffect(() => {
    if (newWord !== '') {
      api
        .get<Equipment[]>('/equipments/', {
          params: {
            name: newWord,
          },
        })
        .then((response) => {
          setEquipments(response.data);
        });
    } else {
      setEquipments([]);
    }
  }, [newWord]);

  useEffect(() => {
    if (newWord !== '') {
      api
        .get<Material[]>('/materials/', {
          params: {
            name: newWord,
          },
        })
        .then((response) => {
          setMaterials(response.data);
        });
    } else {
      setMaterials([]);
    }
  }, [newWord]);

  useEffect(() => {
    if (newWord !== '') {
      api
        .get<PurchaseOrder[]>('/purchase-orders/', {
          params: {
            name: newWord,
          },
        })
        .then((response) => {
          setPurchaseOrders(response.data);
        });
    } else {
      setPurchaseOrders([]);
    }
  }, [newWord]);

  useEffect(() => {
    if (newWord !== '') {
      api
        .get<WorkForce[]>('/work-force/', {
          params: {
            name: newWord,
          },
        })
        .then((response) => {
          setWorkForce(response.data);
        });
    } else {
      setWorkForce([]);
    }
  }, [newWord]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newWord) {
      setInputError('Digite algo que deseje buscar');
      return;
    }
    try {
      const responseEquip = await api.get('/equipments/', {
        params: {
          name: newWord,
        },
      });
      const searchEquipment: Equipment[] = responseEquip.data;
      setEquipments(searchEquipment);

      const responseMateri = await api.get('/materials/', {
        params: {
          name: newWord,
        },
      });
      const searchMaterial: Material[] = responseMateri.data;
      setMaterials(searchMaterial);

      const responsePurch = await api.get('/purchase-orders/', {
        params: {
          name: newWord,
        },
      });
      const searchPurchaseOrder: PurchaseOrder[] = responsePurch.data;
      setPurchaseOrders(searchPurchaseOrder);

      const responseWork = await api.get('/work-force/', {
        params: {
          name: newWord,
        },
      });
      const searchWorkForce: WorkForce[] = responseWork.data;
      setWorkForce(searchWorkForce);

      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por essa palavra');
    }
  }

  return (
    <>
      <img src={imgLogo} alt="MultiSearch" />
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="Digite aqui algo que deseje buscar"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        <strong>Equipamento</strong>
        {equipments?.length === 0 && newWord !== '' && <p>Nenhum resultado</p>}
        {equipments?.map((equipment) => (
          <div key={equipment.EquipmentID}>
            <strong>{equipment.EquipmentID}</strong>
            <p>{equipment.EquipmentName}</p>
          </div>
        ))}
      </Repositories>

      <Repositories>
        <strong>Material</strong>
        {materials?.length === 0 && newWord !== '' && <p>Nenhum resultado</p>}
        {materials?.map((material) => (
          <div key={material.MaterialID}>
            <strong>{material.MaterialID}</strong>
            <p>{material.MaterialName}</p>
          </div>
        ))}
      </Repositories>

      <Repositories>
        <strong>Ordem de Compra</strong>
        {purchaseOrders?.length === 0 && newWord !== '' && (
          <p>Nenhum resultado</p>
        )}
        {purchaseOrders?.map((purchaseOrder) => (
          <div key={purchaseOrder.PurchaseOrderID}>
            <strong>{purchaseOrder.PurchaseOrderID}</strong>
            <p>{purchaseOrder.MaterialName}</p>
            <p>Qtd: {purchaseOrder.Quantity}</p>
          </div>
        ))}
      </Repositories>

      <Repositories>
        <strong>Equipe</strong>
        {workForce?.length === 0 && newWord !== '' && <p>Nenhum resultado</p>}
        {workForce?.map((workForces) => (
          <div key={workForces.WorkforceID}>
            <strong>{workForces.WorkforceID}</strong>
            <p>{workForces.Name}</p>
            <p>{workForces.Shift}</p>
          </div>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
