import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChildProjectCard } from "../components/ChildProjectCard";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/rootSlice";

export const SingleProjectPage = () => {
  const [oneProjectData, setOneProjectData] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        dispatch(showLoading());
        const response = await axios.get(
          `/api/portfoliodata/get-one-project-data/${id}`
        );
        if (response.data.success) {
          setOneProjectData(response.data.data);
        } else {
          message.error(response.data.message);
        }
        dispatch(hideLoading());
      } catch (error) {
        dispatch(hideLoading());
        message.error(error);
      }
    };
    fetchProjectData();
  }, [id]);

  return (
    <div>
      {oneProjectData && <ChildProjectCard projectData={oneProjectData} />}
    </div>
  );
};
