import React, { useState, useEffect, useRef } from 'react';
import api from '../../services/api';
import {
  Container,
  Image,
  Wrapper,
  SearchInput,
  SearchTagInput,
  SearchWrapper,
  InputAddTag,
  TagWrapper,
} from './styles';

const Layout = () => {
  const [repositories, setRepo] = useState([]);
  const [search, setSearch] = useState('');
  const [searchTag, setSearchTag] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);
  const [expand, setExpand] = useState(false);
  const [selectedTest, setSelectedTest] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [previousId, setPreviousId] = useState(null);
  let [tagName, setTagName] = useState('');
  let [count, setCount] = useState(0);
  const tag = useRef();
  const [NewTag, setNewTag] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get();
      setRepo(response.data.students);
    }
    loadRepositories();
  }, [setRepo]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredNames(
      repositories.filter((repository) => {
        if (
          repository.firstName
            .toLowerCase()
            .includes(search.toLowerCase().trim())
        ) {
          return repository.firstName;
        } else if (
          repository.lastName
            .toLowerCase()
            .includes(search.toLowerCase().trim())
        )
          return repository.lastName;
      })
    );
  }, [search, repositories]);

  function changeClassName() {
    expand ? setExpand(false) : setExpand(true);
  }
  const calculateAverage = (grades) => {
    if (grades == null) return;

    let total = 0;

    grades.forEach((element) => {
      total += parseFloat(element);
    });
    return total.toFixed(3) / grades.length;
  };
  const displayTests = (id) => {
    setSelectedId(id);
    let grades = [];
    const array = filteredNames.filter((element) => element.id === id);

    array.forEach((element) => {
      element.grades.forEach((grade) => {
        setCount((count += 1));
        grades[grade] = (
          <li className={`expand${expand ? '-nothing' : '-btn'}`}>
            Test {count}: {grade}%
          </li>
        );
        setSelectedTest(grades.sort());
      });
    });
    setCount(0);
  };

  const handleTag = (e) => {
    if (e) e.preventDefault();
    if (previousId == null) {
      const currentValue = tag.current.value;
      setTagName(currentValue);
      setNewTag((tags) => [
        ...tags,
        <div
          style={{
            backgroundColor: '#f2f2f2',
            width: '100px',
            marginLeft: '10px',
            marginTop: '5px',
            textAlign: 'center',
            borderRadius: '5px',
            padding: '5px',
          }}
        >
          {currentValue}
        </div>,
      ]);

      const index = filteredNames.findIndex(
        (element) => element.id === selectedId
      );
      let firstName = '';
      let city = '';
      let email = '';
      let grades = [];
      let lastName = '';
      let pic = '';
      let skill = '';
      let id = 0;
      let company = '';
      let copyrepositories = [...repositories];
      const array = filteredNames.filter(
        (element) => element.id === selectedId
      );

      array.forEach((element) => {
        firstName = element.firstName;
        city = element.city;
        email = element.email;
        grades = element.grades;
        lastName = element.lastName;
        pic = element.pic;
        skill = element.skill;
        id = element.id;
        company = element.company;
      });

      copyrepositories[index] = {
        NewTag,
        firstName,
        city,
        email,
        company,
        grades,
        lastName,
        pic,
        skill,
        id,
        tagName,
      };

      setRepo(copyrepositories);
      console.log(copyrepositories);
      tag.current.value = '';
      setPreviousId(selectedId);
    } else if (selectedId === previousId) {
      let currentValue = tag.current.value;
      setTagName(currentValue);
      setNewTag((tags) => [
        ...tags,
        <div
          style={{
            backgroundColor: '#f2f2f2',
            width: '100px',
            marginLeft: '10px',
            marginTop: '5px',
            textAlign: 'center',
            borderRadius: '5px',
            padding: '5px',
          }}
        >
          {currentValue}
        </div>,
      ]);
      const index = filteredNames.findIndex(
        (element) => element.id === selectedId
      );
      let firstName = '';
      let city = '';
      let email = '';
      let grades = [];
      let lastName = '';
      let pic = '';
      let skill = '';
      let id = 0;
      let copyrepositories = [...repositories];
      const array = filteredNames.filter(
        (element) => element.id === selectedId
      );

      array.forEach((element) => {
        firstName = element.firstName;
        city = element.city;
        email = element.email;
        grades = element.grades;
        lastName = element.lastName;
        pic = element.pic;
        skill = element.skill;
        id = element.id;
      });

      copyrepositories[index] = {
        NewTag,
        firstName,
        city,
        email,
        grades,
        lastName,
        pic,
        skill,
        id,
        tagName,
      };

      setRepo(copyrepositories);
      console.log(repositories);
      tag.current.value = '';
      setPreviousId(selectedId);
    } else if (selectedId !== previousId) {
      let currentValue = tag.current.value;
      setTagName(currentValue);
      setNewTag('');
      setNewTag((tags) => [
        ...tags,
        <div
          style={{
            backgroundColor: '#f2f2f2',
            width: '100px',
            marginLeft: '10px',
            marginTop: '5px',
            textAlign: 'center',
            borderRadius: '5px',
            padding: '5px',
          }}
        >
          {currentValue}
        </div>,
      ]);
      const index = filteredNames.findIndex(
        (element) => element.id === selectedId
      );
      let firstName = '';
      let city = '';
      let email = '';
      let grades = [];
      let lastName = '';
      let pic = '';
      let skill = '';
      let id = 0;
      let copyrepositories = [...repositories];
      const array = filteredNames.filter(
        (element) => element.id === selectedId
      );

      array.forEach((element) => {
        firstName = element.firstName;
        city = element.city;
        email = element.email;
        grades = element.grades;
        lastName = element.lastName;
        pic = element.pic;
        skill = element.skill;
        id = element.id;
      });

      copyrepositories[index] = {
        NewTag,
        firstName,
        city,
        email,
        grades,
        lastName,
        pic,
        skill,
        id,
        tagName,
      };

      setRepo(copyrepositories);
      console.log(copyrepositories);
      tag.current.value = '';
      setPreviousId(selectedId);
    }
  };

  return (
    <Container>
      <SearchWrapper>
        <SearchInput
          placeholder="Search by name"
          value={search}
          onChange={handleChange}
        />
      </SearchWrapper>
      {Object.keys(filteredNames).map((repository) => {
        return (
          <div>
            <Image src={filteredNames[repository].pic} />
            <Wrapper>
              <ul>
                <h3>
                  {filteredNames[repository].firstName}{' '}
                  {filteredNames[repository].lastName}
                </h3>
                <li>
                  <p>Email: {filteredNames[repository].email}</p>
                </li>
                <li>
                  <p>Company: {filteredNames[repository].company}</p>
                </li>
                <li>
                  <p>Skill: {filteredNames[repository].skill}</p>
                </li>
                <li>
                  <p>
                    Average:
                    {calculateAverage(filteredNames[repository].grades)}%
                  </p>
                </li>
                {selectedId === filteredNames[repository].id
                  ? selectedTest
                  : ''}
                {expand && (
                  <TagWrapper>{filteredNames[repository].NewTag}</TagWrapper>
                )}
              </ul>
            </Wrapper>
            {expand ? (
              <button
                onClick={() => {
                  changeClassName();

                  displayTests(filteredNames[repository].id);
                }}
              >
                -
              </button>
            ) : (
              <button
                onClick={() => {
                  changeClassName();

                  displayTests(filteredNames[repository].id);
                }}
              >
                +
              </button>
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default Layout;
