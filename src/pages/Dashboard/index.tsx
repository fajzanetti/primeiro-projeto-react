import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32972062?s=460&v=4"
            alt="Felipe Zanetti"
          />
          <div>
            <strong>repo/repo</strong>
            <p>lorenasdjlnas daadlçksd s</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32972062?s=460&v=4"
            alt="Felipe Zanetti"
          />
          <div>
            <strong>repo/repo</strong>
            <p>lorenasdjlnas daadlçksd s</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32972062?s=460&v=4"
            alt="Felipe Zanetti"
          />
          <div>
            <strong>repo/repo</strong>
            <p>lorenasdjlnas daadlçksd s</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32972062?s=460&v=4"
            alt="Felipe Zanetti"
          />
          <div>
            <strong>repo/repo</strong>
            <p>lorenasdjlnas daadlçksd s</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;